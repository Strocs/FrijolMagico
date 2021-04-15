const Schedule = async (name, time, section, support, img) => {

    const view = 
    `
        <div class="artist">
            <div class="artist__main">
                <h1 class="artist__name">${name}</h1>
                <p class="artist__time">${time}</p>
            </div>
            <p class="artist__section">${section}</p>
            <p class="artist__support">${support}</p>
            <img src="assets/images/${img}.png" alt="${name}">
        </div>
    `;
    return view;
  };
  
export default Schedule;

