const getInfoAsincrono = async() => {   //Async es una palabra reservada para funciones asincronicas
    var app = new Vue({
        el: '#api',
        data: {
          datos: [],
          datos_csgo:[],
          datos_lol:[],
          datos_rocket:[],
          datos_rainbow:[],
        },
        mounted() {
          fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AJv7xkMzG2M115aFQ2mEln7uLHhhfqdXMYa5JWBZzlkNWJkzwO19lFu_6_ACYur2Ey8VF1r-lQedFo_eHy3ZTE43xevbeAFfOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa4qnVFpSu4kcqgWsyTlSLQfmy74yAmrlJ7uoDl6D7gyubWRHn4iyOI7fT88yBaf92BMkmbzGmlstNOBCIEOaA_zwjgu8MzpzUwtBHn44AOQPToSfccjGyt0&lib=Moc9YeMZF442Vij1YLlTs_HqzQVRJChSp')
            .then(response => response.json())
            .then(data => {
                this.data = data.items
                this.datos_csgo = data.items.filter(item => item.id_juego === 1);
                this.datos_lol = data.items.filter(item => item.id_juego === 2);
                this.datos_rocket = data.items.filter(item => item.id_juego === 3);
                this.datos_rainbow = data.items.filter(item => item.id_juego === 4);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });

}



const getInfoAsincrono2 = async() => {   //Async es una palabra reservada para funciones asincronicas
  var app = new Vue({
      el: '#api2',
      data: {
        datos: [],
        datos_csgo:[],
        datos_lol:[],
        datos_rocket:[],
        datos_rainbow:[],
      },
      mounted() {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AJv7xkMzG2M115aFQ2mEln7uLHhhfqdXMYa5JWBZzlkNWJkzwO19lFu_6_ACYur2Ey8VF1r-lQedFo_eHy3ZTE43xevbeAFfOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa4qnVFpSu4kcqgWsyTlSLQfmy74yAmrlJ7uoDl6D7gyubWRHn4iyOI7fT88yBaf92BMkmbzGmlstNOBCIEOaA_zwjgu8MzpzUwtBHn44AOQPToSfccjGyt0&lib=Moc9YeMZF442Vij1YLlTs_HqzQVRJChSp')
          .then(response => response.json())
          .then(data => {
              this.data = data.items
              this.datos_csgo = data.items.filter(item => item.id_juego === 1);
              this.datos_lol = data.items.filter(item => item.id_juego === 2);
              this.datos_rocket = data.items.filter(item => item.id_juego === 3);
              this.datos_rainbow = data.items.filter(item => item.id_juego === 4);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });

}

getInfoAsincrono()
getInfoAsincrono2()