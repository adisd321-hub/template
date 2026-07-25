async function initVideoPlayer() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat') || 'indo';
    const slugParam = urlParams.get('vid') || '';

    let targetCsvUrl = CSV_INDO_URL;
    if (category === 'barat') {
        targetCsvUrl = CSV_BARAT_URL;
    } else if (category === 'hd') {
        targetCsvUrl = CSV_HD_URL;
    }

    try {
        let response = await fetch(targetCsvUrl);
        let csvText = await response.text();
        
        let lines = csvText.split('\n');
        let videoList = [];

        for (let i = 1; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line) continue;
            
            let parts = parseCSVLine(line);
            if (parts.length >= 6) {
                videoList.push({
                    slug: parts[0].replace(/^"|"$/g, ''),
                    judul: parts[1].replace(/^"|"$/g, ''),
                    thumbnail: parts[2].replace(/^"|"$/g, ''),
                    deskripsi: parts[3].replace(/^"|"$/g, ''),
                    id_source: parts[4].replace(/^"|"$/g, ''),
                    id_short: parts[5].replace(/^"|"$/g, '')
                });
            }
        }

        if (videoList.length === 0) {
            statusMessage.innerText = 'File CSV kosong atau format tidak valid!';
            statusMessage.style.color = '#ff6b6b';
            return;
        }

        let videoItem = videoList.find(item => item.slug === slugParam || item.id_short === slugParam);
        if (!videoItem) {
            videoItem = videoList[0];
        }

        let videoSourceUrl = '';
        if (category === 'indo') { 
            videoSourceUrl = 'https://cdn2.videy.co/' + videoItem.id_source + '.mp4'; 
        }
        else if (category === 'barat') {
            const urls = [
                "https://flat-breeze-f3c9.adisd5864.workers.dev/",
                "https://rapid-mud-f1a6.adis76304.workers.dev/",
                "https://delicate-bread-47e3.adisd0180.workers.dev/",
                "https://aged-surf-9eca.adisd06.workers.dev/",
                "https://mute-river-13b2.adisd419.workers.dev/",
                "https://little-dream-9c6f.adisd4636.workers.dev/",
                "https://calm-meadow-4d36.adisd464.workers.dev/",
                "https://flat-rice-db77.adisd5474.workers.dev/",
                "https://square-band-52e2.adisd633.workers.dev/",
                "https://aged-truth-c413.adisd736.workers.dev/",
                "https://young-silence-2c20.brittanystuart628.workers.dev/"
            ];
            const randomBaseUrl = urls[Math.floor(Math.random() * urls.length)];
            videoSourceUrl = randomBaseUrl + '?id=' + videoItem.id_source;
        }
        else if (category === 'hd') {
            const source_urls = [
                "https://cdn.aguskokdoskfs.workers.dev/?id=",
                "https://cdn.alberthodges42.workers.dev/?id=",
                "https://cdn.alberthopper99.workers.dev/?id=",
                "https://cdn.alishabranch09.workers.dev/?id=",
                "https://cdn.amyhodge442.workers.dev/?id=",
                "https://cdn.andregallagher791.workers.dev/?id=",
                "https://cdn.andreaorr256.workers.dev/?id=",
                "https://cdn.as8933084.workers.dev/?id=",
                "https://cdn.antoniomaddox9.workers.dev/?id=",
                "https://cdn.aprilgardner72.workers.dev/?id="
            ];
            const randomBaseUrl = source_urls[Math.floor(Math.random() * source_urls.length)];
            videoSourceUrl = randomBaseUrl + videoItem.id_source;
        }

        const currentIndex = videoList.findIndex(item => item.slug === videoItem.slug || item.id_short === videoItem.id_short);
        const nextItem = (currentIndex !== -1 && currentIndex < videoList.length - 1) ? videoList[currentIndex + 1] : videoList[0];
        const nextVideoUrl = nextItem ? ('?cat=' + category + '&vid=' + nextItem.slug) : '#';

        // PERBAIKAN: Ubah URL di bawah ini sesuai dengan halaman tujuan Hot Video yang sebenarnya
        let hotVideoUrl = "https://gawrge.blogspot.com/p/hot-video-indo.html";
        if (category === 'barat') {
            hotVideoUrl = "https://gawrge.blogspot.com/p/hot-video-barat.html";
        } else if (category === 'hd') {
            hotVideoUrl = "https://gawrge.blogspot.com/p/hot-video-hd.html";
        }

        videoPageContainer.innerHTML = `
            <div class="video-wrapper">
                <div class="top-nav">
                    <a href="?cat=barat&vid=${videoList[0].slug}" class="nav-link ${category === 'barat' ? 'active' : ''}">Barat</a>
                    <a href="?cat=indo&vid=${videoList[0].slug}" class="nav-link ${category === 'indo' ? 'active' : ''}">Indo</a>
                    <a href="?cat=hd&vid=${videoList[0].slug}" class="nav-link ${category === 'hd' ? 'active' : ''}">HD</a>
                </div>

                <video id="main-video" src="${videoSourceUrl}" autoplay playsinline loop controlsList="nodownload"></video>
                
                <div class="ui-right">
                    <div onclick="window.location.href='https://facebook.com'">
                        <img src="https://ui-avatars.com/api/?name=Admin&background=ff85a2&color=fff" style="width:34px; height:34px; border-radius:50%; border:2px solid #fff; cursor:pointer;" alt="Admin"/>
                    </div>
                    <div class="icon-box" onclick="window.location.href='${videoSourceUrl}'">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/upload.png" class="icon-img" alt="Upload"/>
                        <div class="icon-label">Upload</div>
                    </div>
                    <div class="icon-box" onclick="processDownload('${videoSourceUrl}', '${videoItem.judul}.mp4')">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/download.png" class="icon-img" alt="Download"/>
                        <div class="icon-label">Download</div>
                    </div>
                    <div class="icon-box" onclick="shareVideo('${videoItem.judul}')">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/share.png" class="icon-img" alt="Share"/>
                        <div class="icon-label">Share</div>
                    </div>
                    <div class="icon-box" onclick="window.location.href='${hotVideoUrl}'">
                        <img src="https://media.tenor.com/K3j9pwWlME0AAAAj/fire-flame.gif" style="width:34px; height:34px; display:block; margin:0 auto; cursor:pointer;" alt="Hot Video"/>
                        <div class="icon-label" style="font-weight:bold; color:#ff4500;">Hot Video</div>
                    </div>
                </div>

                <div class="video-controls-bar">
                    <div class="progress-bar-container" id="progress-container">
                        <div class="progress-filled" id="progress-filled"></div>
                    </div>
                    <button class="control-icon-btn" id="mute-btn"><i class="fas fa-volume-up"></i></button>
                    <button class="control-icon-btn" id="fullscreen-btn"><i class="fas fa-expand"></i></button>
                </div>

                <div class="ui-bottom">
                    <div class="channel-title">Esmpeh PWINK</div>
                    <div class="btn-container">
                        <a href="https://www.facebook.com/groups/1334469158799363" class="btn-mini btn-sub" target="_blank">+ Join Group FB Sekarang</a>
                        <a href="${nextVideoUrl}" class="btn-mini">Next Video</a>
                    </div>
                    <div id="desc-box">${videoItem.deskripsi}</div>
                </div>
            </div>
        `;

        statusMessage.style.display = 'none';

        const mainVideo = document.getElementById('main-video');
        const progressFilled = document.getElementById('progress-filled');
        const progressContainer = document.getElementById('progress-container');
        const muteBtn = document.getElementById('mute-btn');
        const fullscreenBtn = document.getElementById('fullscreen-btn');

        mainVideo.addEventListener('click', () => {
            if (mainVideo.paused) mainVideo.play(); else mainVideo.pause();
        });

        mainVideo.addEventListener('timeupdate', () => {
            if(mainVideo.duration) {
                const percent = (mainVideo.currentTime / mainVideo.duration) * 100;
                progressFilled.style.width = percent + '%';
            }
        });

        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            mainVideo.currentTime = pos * mainVideo.duration;
        });

        muteBtn.addEventListener('click', () => {
            mainVideo.muted = !mainVideo.muted;
            muteBtn.innerHTML = mainVideo.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        });

        fullscreenBtn.addEventListener('click', () => {
            if (mainVideo.requestFullscreen) {
                mainVideo.requestFullscreen();
            } else if (mainVideo.webkitRequestFullscreen) {
                mainVideo.webkitRequestFullscreen();
            }
        });

        mainVideo.addEventListener('error', () => {
            statusMessage.innerHTML = 'Video gagal dimuat atau tidak tersedia.<br/><br/>' +
                                      '<a href="' + nextVideoUrl + '" class="btn-next" style="display:inline-block; width:120px; background: #2ed573;">Next Video</a>';
            statusMessage.style.display = 'flex';
            mainVideo.style.display = 'none';
        });

    } catch (err) {
        statusMessage.innerText = 'Gagal mengambil data dari file CSV hosting.';
        statusMessage.style.color = '#ff6b6b';
    }
}
