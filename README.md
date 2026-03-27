https://project4backup.vercel.app/index.html

User Guide: https://docs.google.com/document/d/1W3IAnAJs6MAr9GTLHDJ0LQC8vtLXxZkrCUHythL0LsI/edit?usp=sharing

Dev Log: 02/19/26
Added files I'd worked on seperatly, cleaned up files, altered more of the site to fit our purposes. Got separate hosting set up.

02/26
Research and Treaty pdf's uploaded

Dev Log: 02/27
2 hours of frontend development, styled pages and added features to treaties.

Dev Log: 03/05
Updated github to vercel domain. new project domain
https://project4backup.vercel.app

03/05
Added file upload function, added copyable code snippet to user guide

Dev Log: 03/06
Had to work around owner restrictions to keep public host(vercel) synced with github main project repo. Forked into 423S26/project4 to a personal repo as a work around this issue.
New Link: https://project4original-zeta.vercel.app/
 
Dev Log: 03/27
### Interactive Plains Indian Sign Language (PISL) Video Modal

**Feature Description:**  
We added an accessible, user-friendly modal for the Plains Indian Sign Language (Hand Talk) demonstration video on the Learn page (`html/learn.html`). 

Users click a clean trigger box titled **"Watch PISL Demonstration"** to open a centered modal that embeds and automatically plays this video:  
https://www.youtube.com/watch?v=DI9mCITMu_k  

The modal includes:
- Automatic video playback when opened (`autoplay=1`)
- A prominent close button (`×`)
- Proper cleanup of the iframe source when closed (prevents audio from continuing in the background)
- Keyboard support (Escape key to close, Enter/Space on trigger)
- Click-outside-to-close functionality
- Accessibility features (ARIA roles, focus management)

**Implementation Details:**
- Uses only vanilla HTML, CSS, and JavaScript (no external libraries)
- The modal is triggered by an element with `id="pisl-trigger"`
- Earthy, respectful styling with good mobile responsiveness
- Video stops completely when the modal is closed

This makes the Learn page more interactive and engaging while keeping the focus on cultural learning and reducing walls of static text.

**File:** `html/learn.html`  
**Video used:** James Wooden Legs demonstrating ASL vs PISL

You can extend this later by adding more gesture cards, each opening their own video in the same modal system.