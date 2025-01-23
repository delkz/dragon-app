function getRelativeTime(date: string): string {
    // Data atual em UTC
    const now = new Date();
    const targetDate = new Date(date);

    // Calcula a diferença em milissegundos
    const diffInMs = targetDate.getTime() - now.getTime();
    const diffInSeconds = Math.round(diffInMs / 1000);

    // Define as unidades e seus correspondentes em segundos
    const units = [
        { unit: 'year', seconds: 31536000 },
        { unit: 'month', seconds: 2592000 },
        { unit: 'week', seconds: 604800 },
        { unit: 'day', seconds: 86400 },
        { unit: 'hour', seconds: 3600 },
        { unit: 'minute', seconds: 60 },
        { unit: 'second', seconds: 1 },
    ];

    // Localiza a unidade apropriada
    for (const { unit, seconds } of units) {
        const diff = diffInSeconds / seconds;
        if (Math.abs(diff) >= 1) {
            const roundedDiff = Math.round(diff);
            const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
            return rtf.format(roundedDiff, unit as Intl.RelativeTimeFormatUnit);
        }
    }

    return 'agora mesmo'; // Caso a diferença seja menor que 1 segundo
}

export default getRelativeTime;
