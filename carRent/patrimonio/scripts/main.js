        document.addEventListener("DOMContentLoaded", () => {
            var solicitacoes = document.querySelector(".solicitacoes");
            var fundo = document.querySelector(".fundo");

            window.menuSolicToggle = function() {
                if (solicitacoes.style.display === "block") {
                    solicitacoes.style.display = "none";
                    fundo.style.display = "none";
                } else {
                    solicitacoes.style.display = "block";
                    fundo.style.display = "block";
                }
                console.log("Display:", solicitacoes.style.display);
            };
        });
