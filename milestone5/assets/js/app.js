/*Milestone 1
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto*/

/*Milestone 2
-Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
-Click sul contatto mostra la conversazione del contatto cliccato*/

/*Milestone 3
-Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
-Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.*/

/*Milestone 4
-Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)*/

/*Milestone 5 - opzionale
-Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
-Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti*/

const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact:0,
            newMessage:'',
            search: '',
            darkMode: false,
            showMenu:false,
            contactWriting: false,
            contactOnline : false,

            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/./img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/./img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/./img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/./img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/./img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/./img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/./img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            randomAswers: [
                "ok",
                "A che ora torni?",
                "Non mi va",
                "A presto",
                "Assolutamente si",
                "Assolutamnte no",
                "Forse",
                "Ti farò sapere",
            ]
        }
    },
    methods:{
        clickContact(index){
            console.log('click');
            this.activeContact = index
        },
        addNewMessage(){
            const dt = luxon.DateTime;
            if(! this.newMessage == ''){
                this.contacts[this.activeContact].messages.push({
                    date: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                    message: this.newMessage,
                    status: 'sent'
                })

                this.contactWriting= true
                
                setTimeout(() => {
                    this.contacts[this.activeContact].messages.push({
                        date: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                        message: this.randomAswers[this.answer(0, this.randomAswers.length - 1)],
                        status: 'received'
                    })
                    this.contactWriting= false
                    this.contactOnline= true
                }, 4000);
                
            }
            this.newMessage=''

            setTimeout(() => {
                this.contactOnline= false
            }, 8000)
        },
        showmenu() {
            this.showMenu = !this.showMenu

        },
        deleteMessage(i){
            this.contacts[this.activeContact].messages.splice(i,1)
        },
        deleteMessages(i){
            this.contacts[this.activeContact].messages.splice(i)
        },
        deleteChat(){
            this.contacts.splice(this.activeContact, 1)
        },
        currentTime(){
            const dt = luxon.DateTime;
            const dtNow= dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
            currentTime= dtNow.slice(10,15)
          
            return currentTime;
        
        },
        answer(min, max) {
            randomNumber= Math.floor(Math.random() * (max - min + 1))

            return randomNumber
        }, 
    }
    
}).mount('#app')

