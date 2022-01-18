// window.addEventListener('load',()=>{
// 	const banner=document.querySelector('.banner-bg')
// 	const ul=document.querySelector('.lunbo')
// 	const ol=document.querySelector('.trigger')
// 	var bannerWidth=banner.offsetWidth
// 	for (let i=0;i<ul.children.length;i+=1){
// 		ul.children[i].setAttribute('index',i)
// 		var li=document.createElement('li')
// 		li.setAttribute('data-index',i)
// 		var li_i=document.createElement('i')
// 		li.appendChild(li_i)
// 		ol.appendChild(li)
// 		ol.children[0].classList.add('currtent')
// 		ol.children[0].children[0].classList.add('disp')
// 	}
// 	var first=ul.children[0].cloneNode(true)
// 	first.setAttribute('index',ul.children.length)
// 	var last=ul.children[ul.children.length-1].cloneNode(true)
// 	last.setAttribute('index',-1)
// 	ul.appendChild(first)
// 	ul.insertBefore(last,ul.children[0])
// 	var index=0
// 	var timer=setInterval(()=>{
// 		index+=1
// 		ul.style.transition='all .4s'
// 		var translateX=(-index*bannerWidth)
// 		ul.style.transform='translateX('+translateX+'px)'
// 	},2000)
// 	ul.addEventListener('transitionend',()=>{
// 		if (index>6){
// 			index=0
// 			ul.style.transition='none'
// 			var translateX=(-index*bannerWidth)
// 			ul.style.transform='translateX('+translateX+'px)'
// 		}else if (index<0){
// 			index=6
// 			ul.style.transition='none'
// 			var translateX=(-index*bannerWidth)
// 			ul.style.transform='translateX('+translateX+'px)'
// 		}
// 		// 小圆点变化效果
// 		ol.querySelector('.currtent').classList.remove('currtent')
// 		ol.querySelector('.disp').classList.remove('disp')
// 		ol.children[index].classList.add('currtent')
// 		ol.children[index].children[0].classList.add('disp')
		
// 	})
// 	var startX=0
// 	ul.addEventListener('touchstart',e=>{
// 		clearInterval(timer)
// 		startX=e.targetTouches[0].pageX
// 	})
// 	var moveX=0
// 	var flag=false
// 	ul.addEventListener('touchmove',e=>{
// 		var endX=e.targetTouches[0].pageX
// 		moveX=endX-startX
// 		var translateX=(-index*bannerWidth)+moveX
// 		ul.style.transform='translateX('+translateX+'px)'
// 		e.preventDefault()
// 		flag=true
// 	})
// 	ul.addEventListener('touchend',()=>{
// 		if (flag){
// 			if (Math.abs(moveX)>50){
// 				if (moveX>0){
// 					index-=1
// 				}else {
// 					index+=1
// 				}
// 				var translateX=(-index*bannerWidth)
// 				ul.style.transition='all .4s'
// 				ul.style.transform='translateX('+translateX+'px)'
// 			}else {
// 				var translateX=(-index*bannerWidth)
// 				ul.style.transition='all .1s'
// 				ul.style.transform='translateX('+translateX+'px)'
// 			}
// 		}
		
// 		 clearInterval(timer)
// 		timer=setInterval(()=>{
// 			index+=1
// 			ul.style.transition='all .4s'
// 			var translateX=(-index*bannerWidth)
// 			ul.style.transform='translateX('+translateX+'px)'
// 		},2000)
// 	})
// })

window.addEventListener('load',()=>{       
	  var mySwiper = new Swiper ('.swiper', {
		direction: 'vertical', // 垂直切换选项
		loop: true, // 循环模式选项
		
		// 如果需要分页器
		pagination: { el: '.swiper-pagination', },
		
	})
})