    $(document).ready(function(){      
        var oldtext=['個人資歷','教學概況','研究成果','論文著作','優良榮譽']
        var newtext=['Personnal','Teaching','Study','Paper','Glory']
        $(".sub").slideUp(0)
        for(i=0;i<$(".main").length;i++){
            $(".main:eq("+i+")").mouseover({id:i},function(e){
                n=e.data.id
                $(".main:eq("+n+")").text(newtext[n])
                $(".sub:eq("+n+")").slideToggle("slow")
                $(".sub:not(:eq("+n+"))").slideUp()
            })
               $(".main").mouseout({id:i},function(e){
                 n=e.data.id
                $(".sub").slideUp("slow")
                $(".main:eq("+n+")").text(oldtext[n])
            })
        }
        // $("#menu").css("width",$(".main").length*250)
        })


