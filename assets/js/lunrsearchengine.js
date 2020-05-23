
var documents = [{
    "id": 0,
    "url": "https://educate.infozy.tk/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://educate.infozy.tk/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "https://educate.infozy.tk/",
    "title": "Home",
    "body": ""
    }, {
    "id": 3,
    "url": "https://educate.infozy.tk/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "https://educate.infozy.tk/stricter-csr-laws-as-per-revised-companies-act/",
    "title": "Stricter CSR Laws as per revised Companies Act",
    "body": "2019/08/04 - The Parliament has passed amendments to Companies Act and the bill now advocates for stricter laws for CSR. &nbsp; Amendments are made to Section 135 to carry forward the unspent corporate social responsibility amount, to a special account to be spent within three financial years and transfer thereafter to the Fund specified in Schedule VII, such as PM&#39;s National Relief Fund and the violation of the CSR rules could land company officials in jail for up to 3 years. Companies violating the rules will face a penalty of Rs 50,000 to Rs 25 lakh. Details are as below: In case the unspent amount does not relate to any ongoing project, unspent amounts to be transferred to a Fund specified under Schedule VII within a period of six months of the expiry of the financial year. (ii) In case the unspent amount relates to any ongoing project subject to fulfilling of prescribed conditions, unspent amounts to be transferred by the company within a period of thirty days from the end of the financial year to a special account to be opened by the company in that behalf for that financial year in any scheduled bank to be called the Unspent Corporate Social Responsibility Account. (iii) Such amount shall be spent by the company in pursuance of its obligation towards the Corporate Social Responsibility Policy within a period of three financial years from the date of such transfer, failing which, the company shall transfer the same to a Fund specified in Schedule VII, within a period of thirty days from the date of completion of the third financial year. (iv) Penal provisions inserted as under: The company - punishable with fine which shall not be less than Rs. 50,000 but which may extend to Rs. 25 lakhEvery officer of such company who is in default - shall be punishable with imprisonment for a term which may extend to 3 years or with fine which shall not be less than Rs. 50,000 but which may extend to Rs. 5 lakh, or with both. (v) MCA empowered to give general or special directions to a company or class of companies as it considers necessary to ensure compliance of provisions of this section. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});