var mobileSmall = window.matchMedia("(max-width: 360px)");
var mobileMedium = window.matchMedia("(max-width:375px)");
var mobileBig = window.matchMedia("(max-width: 720px)");
var tablet = window.matchMedia("(max-width: 1140px)");
var notebook = window.matchMedia("(max-width: 1366px)");
var pc = window.matchMedia("(max-width: 1920px)");

function iconAmount() {
    const amountIcon = {
        amountText:0,
        amount:0,
      };
    if (mobileSmall.matches){
        amountIcon.amountText = 1;
        amountIcon.amount= 3;
    }else if (mobileMedium.matches){
        amountIcon.amountText = 2;
        amountIcon.amount= 3;
    }else if (mobileBig.matches){
        amountIcon.amountText =3;
        amountIcon.amount= 6;
    } else if (tablet.matches){
        amountIcon.amountText =4;
        amountIcon.amount= 6;
    }else if (notebook.matches){
        amountIcon.amountText = 5;
        amountIcon.amount= 8;
    }else if (pc.matches){
        amountIcon.amountText = 6;
        amountIcon.amount= 8;
    }
    return (amountIcon);
}

export default iconAmount;