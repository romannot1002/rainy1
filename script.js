// Official RAINCORN Contract Address on Solana
const CONTRACT_ADDRESS = '9jCPSnncNdPJtTfgAfjge4XsFw89FAo5cYC21SUspump';

// Social Links
const SOCIALS = {
    twitter: 'https://x.com/raincornbyzooko',
    community: 'https://x.com/i/communities/1987001209266253900',
    dexscreener: 'https://dexscreener.com/solana/57vu73cvdadxrphmoxapttv1rkxe1wqw8qc2ha5xmrwa',
    zooko: 'https://x.com/zooko',
    wayneVaughan: 'https://x.com/WayneVaughan'
};

// Update contract address on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ca').textContent = CONTRACT_ADDRESS;
    console.log('🌈 RAINCORN loaded! Contract:', CONTRACT_ADDRESS);
});

// Copy Contract Address
function copyCA() {
    const ca = document.getElementById('ca');
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(function() {
        const originalText = ca.textContent;
        ca.textContent = '✅ COPIED!';
        ca.style.color = '#0f0';
        
        setTimeout(function() {
            ca.textContent = originalText;
            ca.style.color = 'var(--rainbow-green)';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy address. Please copy manually: ' + CONTRACT_ADDRESS);
    });
}

// Buy Now Function - Opens Jupiter Swap
function buyNow() {
    // Jupiter is the best aggregator on Solana
    const jupiterLink = `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`;
    window.open(jupiterLink, '_blank');
}

// Smooth Scroll for Navigation
document.querySelectorAll('.chan-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Allow clicking on contract address to copy (in addition to the button)
document.getElementById('ca').addEventListener('click', copyCA);

// Meme click to enlarge
document.querySelectorAll('.meme-box').forEach(meme => {
    meme.addEventListener('click', function() {
        this.classList.toggle('meme-enlarged');
    });
});

// Random greentext quotes for console
const greentextQuotes = [
    ">be me\n>buy RAINCORN\n>instant profit\n>mfw",
    ">just aped in on Jupiter\n>already up 10x\n>thank you anons",
    ">sold my other bags\n>all in on RAINCORN\n>comfy on Solana",
    ">normies don't understand\n>they will FOMO later\n>ngmi",
    ">Zooko is based\n>RAINCORN is based\n>I'm gonna make it",
    ">privacy matters\n>memes matter\n>RAINCORN gets both\n>wagmi",
];

// Display random greentext in console
console.log('%c' + greentextQuotes[Math.floor(Math.random() * greentextQuotes.length)], 'color: #00CC44; font-family: monospace; font-size: 14px;');

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateRainbowMode();
    }
});

function activateRainbowMode() {
    document.body.style.animation = 'rainbow 3s infinite';
    
    // Create rainbow trail effect
    let rainbowActive = true;
    document.addEventListener('mousemove', function(e) {
        if (rainbowActive) createRainbowTrail(e);
    });
    
    alert('🌈 RAINBOW MODE ACTIVATED! 🦄\nYou are now EXTRA based, anon.');
    
    // Deactivate after 30 seconds
    setTimeout(() => {
        rainbowActive = false;
    }, 30000);
}

function createRainbowTrail(e) {
    const rainbow = document.createElement('div');
    rainbow.style.position = 'fixed';
    rainbow.style.left = e.clientX + 'px';
    rainbow.style.top = e.clientY + 'px';
    rainbow.style.width = '10px';
    rainbow.style.height = '10px';
    rainbow.style.borderRadius = '50%';
    rainbow.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    rainbow.style.pointerEvents = 'none';
    rainbow.style.zIndex = '9999';
    rainbow.style.transition = 'all 0.5s';
    
    document.body.appendChild(rainbow);
    
    setTimeout(() => {
        rainbow.style.opacity = '0';
        rainbow.style.transform = 'scale(2)';
    }, 10);
    
    setTimeout(() => {
        rainbow.remove();
    }, 500);
}

// Meme counter
let memeViews = parseInt(localStorage.getItem('raincornMemeViews')) || 0;
memeViews++;
localStorage.setItem('raincornMemeViews', memeViews);
console.log(`🌈 You've viewed RAINCORN ${memeViews} times. Based.`);

// Add some interactivity to posts
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('mouseenter', function() {
        this.style.borderColor = '#FF00CC';
    });
    
    post.addEventListener('mouseleave', function() {
        if (!this.classList.contains('highlighted-post')) {
            this.style.borderColor = 'var(--border-color)';
        }
    });
});

// Warning for paste attempts (anti-scam)
document.addEventListener('paste', function(e) {
    const pastedText = e.clipboardData.getData('text');
    if (pastedText.length === 44 && pastedText !== CONTRACT_ADDRESS) {
        console.warn('⚠️ WARNING: You pasted a different contract address!');
        console.warn('Official RAINCORN CA:', CONTRACT_ADDRESS);
        console.warn('Pasted CA:', pastedText);
        
        if (confirm('⚠️ WARNING ⚠️\n\nThe address you pasted is different from the official RAINCORN contract!\n\nOfficial: ' + CONTRACT_ADDRESS + '\n\nPasted: ' + pastedText + '\n\nClick OK to copy the official address.')) {
            navigator.clipboard.writeText(CONTRACT_ADDRESS);
            alert('✅ Official contract address copied to clipboard!');
        }
    }
});

// Add floating unicorns easter egg (click logo 10 times)
let logoClicks = 0;
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.addEventListener('click', function() {
        logoClicks++;
        if (logoClicks === 10) {
            launchUnicorns();
            logoClicks = 0;
        }
    });
}

function launchUnicorns() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const unicorn = document.createElement('div');
            unicorn.textContent = '🦄';
            unicorn.style.position = 'fixed';
            unicorn.style.left = Math.random() * window.innerWidth + 'px';
            unicorn.style.top = '-50px';
            unicorn.style.fontSize = '40px';
            unicorn.style.zIndex = '9999';
            unicorn.style.pointerEvents = 'none';
            unicorn.style.animation = 'fall 3s linear';
            
            document.body.appendChild(unicorn);
            
            setTimeout(() => unicorn.remove(), 3000);
        }, i * 100);
    }
}

// Add CSS for falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Log based message
console.log('%c🌈 RAINCORN 🦄', 'font-size: 24px; font-weight: bold; color: #FF00CC; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cCA: ' + CONTRACT_ADDRESS, 'font-size: 12px; color: #00FF66; background: #000; padding: 5px;');
console.log('%cConcept by Zooko - Believe in Privacy 🔐', 'font-size: 12px; color: #9933FF;');
console.log('%cWagmi anon 🚀', 'font-size: 14px; color: #00CC44;');
