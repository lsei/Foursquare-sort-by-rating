// ==UserScript==
// @name       Foursquare sort by rating
// @namespace  https://github.com/lsei
// @version    0.1
// @description  Enables you to sort the results of the Foursquare explore page by rating. 
// @match      https://foursquare.com/explore*
// @copyright  2014+, lsei
// ==/UserScript==

// Add button
$('.newFilterControls').after('<div class="lsei-newFilterControls" style="background: #f8f8f8;border-top: 1px solid #fff;border-bottom: 1px solid #e4e4e4;padding: 5px 16px 8px 16px;"><h5 class="lsei-headerVisible" style="color: #6e6e6e;display: inline-block;font-size: 11px;float: left;margin: 6px 5px 0 0;text-shadow: 0 1px 0 #fff;">Filter by: </h5><ul class="lsei-chips" style="list-style: none;margin: 0;overflow: hidden;padding: 0;"><li class="lsei-chip lsei-sortByRating" style="float: left;margin: 0 4px 0 0;position: relative;"><span style="-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;background: #f3f3f3;border: solid 1px #dcdcdc;color: #6e6e6e;cursor: pointer;display: inline-block;font-size: 11px;font-weight: bold;margin: 0;padding: 4px 8px;position: relative;text-decoration: none;text-shadow: 0 1px 0 #fff;vertical-align: middle;">Rating</span></li></ul></div>');

// Add click functionality
$('.lsei-sortByRating span').click(function() {
    
    // Replace sorted list into UL
    $('.recommendationList').html(

    	// Sort list by float found in .venuescore. 
        $('.recommendationList .card').sort(function(a,b){
            
            var ratingA = parseFloat($(a).find('.venueScore').text());
            var ratingB = parseFloat($(b).find('.venueScore').text());
            
            return (ratingA > ratingB) ? -1 : (ratingA < ratingB) ? 1 : 0;
            
        })
    );
});