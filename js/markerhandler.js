AFRAME.registerComponent("markerhandler", {
    init: async function() {
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found");
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost");
        this.handleMarkerLost();
      });
    },

    handleMarkerFound: function() {

      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderButtton = document.getElementById("order-button");
      var orderSummaryButtton = document.getElementById("order-summary-button");
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpeg",
          title: "Thanks For Order !",
          text: "  ",
          timer: 2000,
          buttons: false
        });
      });
  
      orderSummaryButtton.addEventListener("click", () => {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work In Progress"
        });
      });
    },
  
    handleMarkerLost: function() {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });