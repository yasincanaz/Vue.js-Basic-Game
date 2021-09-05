new Vue({
    el: '#exercise',
    data: {
        me: 100,
        monster: 100,
        damage1: 0,
        damage2: 0,
        play: false,
        logs: [],
        time: 0,
    },
    methods: {
        damageAttack: function() {
            this.damage1 = Math.floor(Math.random() * 10);
            this.monster = this.monster - this.damage1;
            this.monsterAttack();
            this.logPress({ turn: "p", text: "Oyuncu Atağı (" + this.damage1 + ")" });

        },
        specialAttack: function() {
            vm = this;
            if (!this.time == 0) {

            } else {
                this.damage1 = Math.floor(Math.random() * 20);
                this.monster = this.monster - this.damage1;
                this.monsterAttack();
                this.logPress({ turn: "p", text: "Kükreyen Alev Vuruşu (" + this.damage1 + ")" });
                this.time = 20;
                setInterval(function() {
                    if (vm.time > 0) {
                        vm.time--;
                    } else {

                    }
                }, 1000);

            }
        },
        health: function() {
            this.damage1 = Math.floor(Math.random() * 10);
            this.me = this.me + this.damage1;
            this.monsterAttack();
            this.logPress({ turn: "p", text: "Can Yapıldı (" + this.damage1 + ")" });
        },
        giveUp: function() {
            this.logPress({ turn: "p", text: "Pes Ettin Ezik!!" });
            if (confirm("Pes Ettin Yeniden Oyna!")) {
                this.me = 100;
                this.monster = 100;
                this.logs = [];
                this.time = 0;
            }
        },
        monsterAttack: function() {
            this.damage2 = Math.floor(Math.random() * 10);
            this.me = this.me - this.damage2;
            this.logPress({ turn: "m", text: "Canavar Atağı (" + this.damage2 + ")" });
        },
        logPress: function(log) {
            this.logs.push(log);
        }
    },
    watch: {
        me: function(value) {
            if (value <= 0) {
                if (confirm("Oyunu Kaybettin Yeniden Oyna!")) {
                    this.me = 100;
                    this.monster = 100;
                    this.logs = [];
                    this.time = 0;
                }
            }
            if (value > 100) {
                this.me = 100;
            }
        },
        monster: function(value) {
            if (value <= 0) {
                if (confirm("Oyunu Kazandın Yeniden Oyna!")) {
                    this.me = 100;
                    this.monster = 100;
                    this.logs = [];
                    this.time = 0;
                }
            }
        }
    }
});