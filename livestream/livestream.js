let frame = document.createElement("iframe");  
frame.referrerPolicy = "origin";  
frame.src = "https://www.youtube.com/live_chat?v=aORUu0Yez5M&embed_domain=" + window.location.hostname;  
frame.frameBorder = "0";  
frame.id = "chat-embed";  
let wrapper = document.getElementById("chat-embed-wrapper");  
wrapper.appendChild(frame); 
