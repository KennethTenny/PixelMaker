function makeGrid() {

    const inputHeight = document.getElementById("inputHeight").value;
    const inputWidth = document.getElementById("inputWidth").value;

    let pixelCanvas = document.getElementById("pixelCanvas");
    // Clearing table on every submit.
    pixelCanvas.innerHTML = "";
    const colorPicker = document.getElementById("colorPicker").value;

    // Building Table
    for (let row_index = 0; row_index < inputHeight; row_index++) {
        let row = pixelCanvas.insertRow(row_index);

        for (let column_index = 0; column_index < inputWidth; column_index++) {
            let cell = row.insertCell(column_index);
            // Adding event listeners to each cell of table.
            addEventListenerToCell(cell, colorPicker);
          }
      }

}

function addEventListenerToCell(cell, colorPicker){

    cell.addEventListener('click', function (e) {
        // Upon clicking, the event listener will make the corresponding cell of the given colour.
        cell.style.backgroundColor = colorPicker;
      });

}