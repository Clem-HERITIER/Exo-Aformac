$("p").click(function()
    {
        $(this).slideUp();
    }
)

$("#button1").click(function()
    {
        $("p").slideDown("fast");
    }
)
 
$("#popup").click(function()
    {
        $("section").toggle("slow");

        $("body").append('<div id="text"><button id="close">+</button><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ipsa iste dolore, possimus consequuntur laudantium eveniet doloribus unde quisquam officiis tenetur veritatis illum dolorem exercitationem quaerat rem neque molestiae magni        Odit officia tempore maxime non at modi, iure incidunt, natus consequatur cupiditate optio doloribus commodi est perferendis? Doloribus iure nemo debitis fugit. A, unde quidem consequuntur et officiis laudantium dolore.        Quos architecto, possimus deleniti, necessitatibus minus labore neque eaque molestias eveniet id deserunt vel ratione voluptatum quidem culpa delectus! Pariatur ex suscipit quasi sit? Molestiae, totam. Officia, fuga! Quos, tempora?</p></div>');

        $("#close").click(function()
            {
                $("section").toggle("slow");
                $("#text").remove();
            }
        )
    }
)


