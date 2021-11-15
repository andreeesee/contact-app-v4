import Swal from "sweetalert2";
export const ConfirmationDialogue = (message, eml, num, loc, yes, no, callBack) =>
  Swal.fire({
    title: `<span align="center">${message}<span>`,
    html: `<p align="left"> ${eml} <br> ${num} <br> ${loc} <loc> </p>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: yes,
    cancelButtonText: no,
    confirmButtonColor: "#3A4CEA",
    iconColor: "#3A4CEA",
  }).then((result) => {
    if (result.value) {
      callBack();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    }
  });