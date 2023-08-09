function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();
function navborder() {
  var list = document.querySelectorAll("li");
  list.forEach((e) => {
    e.addEventListener("click", () => {
      list.forEach((li) => {
        li.style.borderBottom = "none";
      });
      e.style.borderBottom = "2px solid white";
    });
  });
}
navborder();
function cursor(){
  let cursor = document.querySelector(".cursor");
  let main = document.querySelector(".main");
  main.addEventListener("mousemove",(dets)=>{
   cursor.style.left = dets.x + "px";
   cursor.style.top = dets.y + "px";
  })
}
cursor();

let tl = gsap.timeline();
tl.from(".bs .headings h1",{
  x:"100%",
  duration:1,
})
tl.from(".bs .headings h5",{
  x:"100%",
  delay:-1,
  duration:1,
})
tl.to(".bs",{
  height:0,
  delay:1.5,
  duration:1,
  ease:Circ.easeInOut,
})
tl.to(".bs .headings h1",{
  y:"-100%",
  delay:-1,
  duration:0.5
})
tl.to(".bs .headings h5",{
  y:"-500%",
  delay:-0.5,
  duration:0.5
})



gsap.to(".hero-heading h1", {
  x: -80,

  scrollTrigger: {
    trigger: ".headings h1",
    scroller: ".main",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.to(".hero-heading h2", {
  x: 80,

  scrollTrigger: {
    trigger: ".headings h1",
    scroller: ".main",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.to(".hero video", {
  width:"80%",
  scrollTrigger: {
    trigger: ".headings h1",
    scroller: ".main",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});