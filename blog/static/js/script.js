function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



// document.addEventListener('DOMContentLoaded', function() {
//     const projectWrapper = document.querySelector('.about-containers-project');
//     // Clone the project elements for infinite scrolling
//     const projects = document.querySelectorAll('.details-container-project');
//     projects.forEach((project) => {
//         const clone = project.cloneNode(true);
//         projectWrapper.appendChild(clone);
//     });
//     let isMouseDown = false; // Flag to track if the mouse is pressed
//     // Mouse down event to start scrolling
//     projectWrapper.addEventListener('mousedown', function(event) {
//         isMouseDown = true; // Set flag to true when mouse is clicked
//     });
//     // Mouse up event to stop scrolling
//     document.addEventListener('mouseup', function() {
//         isMouseDown = false; // Set flag to false when mouse is released
//     });
//     // Mouse move event to handle scroll while the mouse is clicked
//     projectWrapper.addEventListener('mousemove', function(event) {
//         if (!isMouseDown) return; // Only scroll if the mouse is clicked
//         const wrapperWidth = projectWrapper.offsetWidth; // Width of the wrapper
//         const scrollWidth = projectWrapper.scrollWidth;   // Total scrollable width
//         // Get mouse position relative to the projectWrapper
//         const mouseX = event.clientX - projectWrapper.getBoundingClientRect().left;
//         // Calculate the percentage of the mouse position within the wrapper
//         const scrollPercent = (mouseX / wrapperWidth);
//         // Scroll the projectWrapper based on the mouse position
//         projectWrapper.scrollLeft = (scrollPercent * (scrollWidth - wrapperWidth)) * 0.4;
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const projectWrapper = document.querySelector('.about-containers-project')
//     let scrollAmount = 0;
//     const scrollSpeed = 1;
//     let isScrolling = true;
//     let isInView = false;

//     function scrollProjects(){
//         if(isScrolling && isInView){
//             scrollAmount += scrollSpeed;
//             if(scrollAmount >= projectWrapper.scrollWidth/2){
//                 scrollAmount = 0;
//             }
//             projectWrapper.scrollLeft = scrollAmount;      
//         }
//       requestAnimationFrame(scrollProjects);
//     }

//     // Clone The Project elements for infinite scrolling
//     const projects = document.querySelectorAll(".details-container-project");
//     projects.forEach((project) => {
//         const clone = project.cloneNode(true);
//         projectWrapper.appendChild(clone);
//     })

//     projectWrapper.addEventListener('mouseover', () => {
//         isScrolling = false;
//     })

//     projectWrapper.addEventListener('mouseout', () => {
//         isScrolling = true;
//     })

//     const oberverOptions = {
//         root : null,
//         threshold: 0.8
//     }

//     const observer = new IntersectionObserver((entries) =>{
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 isInView = true;
//             } else{
//                 isInView = false;
//             }
//         });
//     }, oberverOptions)

//     observer.observe(projectWrapper)
//     scrollProjects();
    
// });