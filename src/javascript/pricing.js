import inboundPricing from "../../assets/data/pricing-inbound";
import outboundPricing from "../../assets/data/pricing-outbound";
$(".get-estimate").on("click", function() {
  $(".section-cost-estimation.hide-item")
    .removeClass("hide-item")
    .addClass("show-item");
  $("body,html").animate({ scrollTop: $("body").height() }, 500);
});
let countriesChosen = [];
$(".country-tags").bind("DOMSubtreeModified", function(e) {
  let $countriesTags = $(".country-tags .tag");
  for (let i = 0; i < $countriesTags.length; i++) {
    countriesChosen.push($countriesTags[i].innerText);
  }
  // console.log("countriesChosen", countriesChosen);
});

// $(".checkbox").on("change", function() {
//   let checkboxesValues = [];
//   let SMSoptions = document.querySelectorAll('input.checkbox[type="checkbox"]');
//   SMSoptions.forEach(input => {
//     if (input.checked) {
//       checkboxesValues.push(input.value);
//     }
//     if (
//       checkboxesValues.includes("outbound") &&
//       checkboxesValues.includes("inbound")
//     ) {
//       // average of countries chosen 70% of outbound and 30% of inbound
//       let inboundPricingArray;
//       countriesChosen.forEach(item => {
//         inboundPricingArray = inboundPricing.filter(obj =>
//           obj["Country"] === item &&
//           obj["Phone Number Type"] === "local" &&
//           obj["SMS Enabled"] === "yes"
//             ? obj["Inbound SMS Price "][" Msg"]
//             : " "
//         );
//       });
//       console.log(inboundPricingArray);
//     }
//     if (
//       checkboxesValues.includes("inbound") &&
//       !checkboxesValues.includes("outbound")
//     ) {
//     }
//     if (
//       checkboxesValues.includes("outbound") &&
//       !checkboxesValues.includes("inbound")
//     ) {
//       countriesChosen.forEach(item => {
//         return outboundPricing.filter(obj =>
//           )
//       })
//     }
//   });
// });
