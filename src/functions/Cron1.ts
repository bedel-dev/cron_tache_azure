import { app, InvocationContext, Timer } from "@azure/functions";
import axios from 'axios';
import { API_BASE_URL } from '../../config';

export async function Cron1(myTimer: Timer, context: InvocationContext): Promise<void> {

        try {
            const response = await axios.post(API_BASE_URL+'/v1.4/phone_messages/send.json', { /* Données à envoyer */ });
            console.log('Réponse de la requête POST :', response.data);
        } catch (error) {
            console.error('Erreur lors de la requête POST :', error);
        }
    
        if (myTimer.isPastDue) {
            context.log("La fonction s'est exécutée en retard à cause d'une longue exécution précédente.");
        }
        context.log('Fonction exécutée à :', new Date().toISOString());
}

app.timer('Cron1', {
    schedule: '0 */1 * * * *',
    handler: Cron1
});
