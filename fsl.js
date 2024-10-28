$(document).ready(function () {
   	setTimeout(function () {
   		  ApplyStockLinkUrls();
	}, 5000);
});

function ApplyStockLinkUrls(){
	var stockSymbolDivs = $(".posweb-cell-symbol-name_container");
	for(var i = 0;i < stockSymbolDivs.length;i++){
		var stockSymbolArray = stockSymbolDivs[i].innerHTML.split("</span>")
		var stockSymbol = stockSymbolArray[0].replace("<span>", "");
		stockSymbolDivs[i].innerHTML = stockSymbolDivs[i].innerHTML.replace("<span>" + stockSymbol + "</span>", "<span>" + stockSymbol + "</span>&nbsp;<a title='Open in New Tab' target='_blank' href='https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=" + stockSymbol + "'>↗</a>");
	}
}

