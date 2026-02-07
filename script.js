  const heartsContainer = document.getElementById('hearts-container');
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
            heartsContainer.appendChild(heart);
        }
        const rosesGrid = document.getElementById('rosesGrid');
        const roseCountElement = document.getElementById('roseCount');
        let roseCount = 0;
        
        for (let i = 0; i < 12; i++) {
            const rose = document.createElement('div');
            rose.className = 'small-rose';
            const colors = ['#ff4081', '#f50057', '#d81b60', '#c2185b', '#ad1457'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            rose.style.background = `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`;
            
            rose.addEventListener('click', () => {
                roseCount++;
                roseCountElement.textContent = roseCount;
                const floatingRose = rose.cloneNode(true);
                floatingRose.style.position = 'fixed';
                floatingRose.style.top = '80vh';
                floatingRose.style.left = Math.random() * 80 + 10 + 'vw';
                floatingRose.style.zIndex = '1000';
                floatingRose.style.transform = 'scale(1.5)';
                document.body.appendChild(floatingRose);
                const animation = floatingRose.animate([
                    { top: '80vh', opacity: 1 },
                    { top: '10vh', opacity: 0 }
                ], {
                    duration: 2000,
                    easing: 'ease-out'
                });
                
                animation.onfinish = () => {
                    document.body.removeChild(floatingRose);
                };
            });
            
            rosesGrid.appendChild(rose);
        }
        const poemBtn = document.getElementById('poemBtn');
        poemBtn.addEventListener('click', () => {
            createPoemPage();
        });

        function createPoemPage() {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                backdrop-filter: blur(5px);
            `;
            const letter = document.createElement('div');
            letter.style.cssText = `
                background: #fff8e1;
                width: 90%;
                max-width: 800px;
                min-height: 600px;
                padding: 40px;
                border-radius: 5px;
                position: relative;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                font-family: 'Courier New', Courier, monospace;
                overflow: hidden;
            `;
            
            const tornEdge = document.createElement('div');
            tornEdge.style.cssText = `
                position: absolute;
                top: 0;
                right: 0;
                width: 50px;
                height: 100%;
                background: linear-gradient(45deg, transparent 0%, transparent 45%, #fff8e1 45%, #fff8e1 55%, transparent 55%);
            `;
            
            const stain1 = document.createElement('div');
            stain1.style.cssText = `
                position: absolute;
                top: 100px;
                left: 50px;
                width: 60px;
                height: 60px;
                background: rgba(139, 69, 19, 0.1);
                border-radius: 50%;
                filter: blur(5px);
            `;
            
            const stain2 = document.createElement('div');
            stain2.style.cssText = `
                position: absolute;
                bottom: 150px;
                right: 80px;
                width: 40px;
                height: 40px;
                background: rgba(139, 69, 19, 0.08);
                border-radius: 50%;
                filter: blur(3px);
            `;
        
            letter.innerHTML = `
                <div style="text-align: center; margin-bottom: 30px;">
    <div style="font-size: 2.5rem; color: #8b0000; margin-bottom: 10px;">❤️</div>
    <div style="font-size: 1.5rem; color: #8b0000; text-decoration: underline; margin-bottom: 20px;">
        A Letter for babu 
    </div>
    <div style="font-size: 0.9rem; color: #5d4037; font-style: italic;">
        meri dil ki baatein on this special day
    </div>
</div>

<div style="padding: 0 20px;">
    <div style="font-size: 1.3rem; line-height: 1.8; color: #4e342e; margin-bottom: 25px; text-align: center;">
        <p style="margin-bottom: 15px; font-weight: bold;">Meri pyaari Vasu,</p>
        
        <div style="text-align: left; font-size: 1.1rem;">
            <p style="margin-bottom: 15px; text-indent: 20px;">
                Ye phool kya, iss dil ke andar sirf tum ho,<br>
                Har dhadkan mein, har khayal mein sirf tum ho.
            </p>

            <p style="margin-bottom: 15px; text-indent: 20px;">
                Tumhari muskaan meri subah hai,<br>
                Tumhari baatein meri shaam,<br>
                Aur tumhara saath woh dua hai,<br>
                Jo har pal qubool hoti lagti hai.
            </p>

            <p style="margin-bottom: 15px; text-indent: 20px;">
                Tum aaye toh zindagi rangon se bhar gayi,<br>
                Har khamoshi ek pyaari si kahaani ban gayi.<br>
                Tum ho toh har mushkil aasaan lagti hai,<br>
                Har raasta apna sa lagta hai.
            </p>

           

            <p style="margin-bottom: 15px; text-indent: 20px;">
                Dua hai ki hamara pyaar bhi is gulaab ki tarah ho,<br>
                Khoobsurat, mehakta hua, aur hamesha zinda.<br>
                Aaj, kal, aur har aane wale kal mein,<br>
                Sirf tum… aur sirf hum.
            </p>
        </div>
    </div>
</div>

                        
                        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed #8b0000;">
                            <p style="font-style: italic; color: #5d4037; margin-bottom: 10px;">
                                With each rose that blooms, I'm reminded<br>
                                Of how my love for you has been redefined.
                            </p>
                        </div>
                    </div>
                    
                    <div style="text-align: right; margin-top: 50px;">
                        <div style="font-size: 1.2rem; color: #8b0000; font-weight: bold;">
                            Forever Yours,
                        </div>
                        <div style="font-size: 1.1rem; color: #5d4037; font-style: italic;">
                            Your Secret Admirer
                        </div>
                    </div>
                </div>
                
                <button id="writeYourOwn" style="
                    background: #8b0000;
                    color: white;
                    border: none;
                    padding: 10px 25px;
                    font-size: 1rem;
                    border-radius: 20px;
                    cursor: pointer;
                    margin-top: 40px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    font-family: 'Courier New', Courier, monospace;
                    transition: all 0.3s;
                ">Write Your Own Poem Here</button>
                
                <textarea id="poemInput" placeholder="Write your own love poem for Vasu here..." style="
                    width: 100%;
                    height: 150px;
                    margin-top: 20px;
                    padding: 15px;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 1rem;
                    border: 1px dashed #8b0000;
                    background: rgba(255, 248, 225, 0.8);
                    display: none;
                    color: #4e342e;
                "></textarea>
                
                <button id="closeLetter" style="
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #8b0000;
                    cursor: pointer;
                ">×</button>
            `;
            letter.appendChild(tornEdge);
            letter.appendChild(stain1);
            letter.appendChild(stain2);
            overlay.appendChild(letter);
            
            document.body.appendChild(overlay);
            document.getElementById('closeLetter').addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
            
            document.getElementById('writeYourOwn').addEventListener('click', () => {
                const textarea = document.getElementById('poemInput');
                const button = document.getElementById('writeYourOwn');
                if (textarea.style.display === 'none' || textarea.style.display === '') {
                    textarea.style.display = 'block';
                    button.textContent = 'Save Poem';
                    textarea.focus();
                } else {
                    button.textContent = 'Poem Saved!';
                    setTimeout(() => {
                        button.textContent = 'Write Your Own Poem Here';
                        textarea.style.display = 'none';
                    }, 1500);
                }
            });
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
        }
        let count = 0;
        const targetCount = 99;
        const countInterval = setInterval(() => {
            if (count < targetCount) {
                count++;
                roseCountElement.textContent = count;
            } else {
                clearInterval(countInterval);
            }
        }, 30);
