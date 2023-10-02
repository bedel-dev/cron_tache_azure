import { app, InvocationContext, Timer } from "@azure/functions";

export async function Cron1(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('Cron1', {
    schedule: '0 */5 * * * *',
    handler: Cron1
});
