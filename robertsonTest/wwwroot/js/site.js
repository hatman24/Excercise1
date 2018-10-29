// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function numberToWords( n ) {

        var dc = n.split("."); 
        if(dc[0] == n){
            var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';
        }else{
           var string = dc[0].toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';
        } 

        /* Remove spaces and commas */
        string = string.replace(/[, ]/g,"");

        /* Is number zero? */
        if( parseInt( string ) === 0 ) {
            return 'zero';
        }
        
        /* Array of units as words */
        units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
        
        /* Array of tens as words */
        tens = [ '', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ' ];
        
        /* Array of scales as words */
        scales = [ '', ' thousand ', ' million ', ' billion ', ' ßtrillion ', 'quadrillion ', 'quintillion ', 'sextillion ', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
        
        /* Split user argument into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while( start > 0 ) {
            end = start;
            chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
        }
        
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if( chunksLen > scales.length ) {
            return '';
        }
        
        /* Stringify each integer in each chunk */
        words = [];
        for( i = 0; i < chunksLen; i++ ) {
            
            chunk = parseInt( chunks[i] );
            
            if( chunk ) {
                
                /* Split chunk into array of individual integers */
                ints = chunks[i].split( '' ).reverse().map( parseFloat );
            
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if( ints[1] === 1 ) {
                    ints[0] += 10;
                }
                
                /* Add scale word if chunk is not zero and array item exists */
                if( ( word = scales[i] ) ) {
                    words.push( word );
                }
                
                /* Add unit word if array item exists */
                if( ( word = units[ ints[0] ] ) ) {
                    words.push( word );
                }
                
                /* Add tens word if array item exists */
                if( ( word = tens[ ints[1] ] ) ) {
                    words.push( word );
                }

                /* Add hundreds word if array item exists */
                if( ( word = units[ ints[2] ] ) ) {
                    words.push( word + ' hundred ' );
                }
                
            }

            
        }
            words.reverse().join( ' ' );
            if(dc[1]){
                words.push(" and " + dc[1] + "/100");
            }
        
        return words;
        
    }


// - - - - - Tests - - - - - -
function test(v) {
    var sep = ('string'==typeof v)?'"':'';
    console.log("numberToWords("+sep + v.toString() + sep+") = "+numberToWords(v));
}

$( ".enterBtn" ).click(function( event ) {
    event.preventDefault();
    $("#Output").html(numberToWords($("#amountInput").val()))
});

$('#amountInput').on('keypress', function (e) {
         if(e.which === 13){

            $(this).attr("disabled", "disabled");

            $("#Output").html(numberToWords($("#amountInput").val()))

            $(this).removeAttr("disabled");
         }
   });