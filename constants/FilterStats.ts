type Ride = {
    startDate: number;
    distance: number;
    duration: number;
    averageSpeed: number;
    topSpeed: number;
    score?: number;
};

type Stats = {
    distance: number;
    duration: number;
    fuel: number;
    cost: number;
    avgSpeed: number;
    topSpeed: number;
};

export const getStatsInRange = (
    rides: Ride[],
    startTimestamp: number,
    endTimestamp: number
): Stats => {
    const filtered = rides.filter(
        ride => ride.startDate >= startTimestamp && ride.startDate <= endTimestamp
    );

    if (filtered.length === 0) {
        return {
            distance: 0,
            duration: 0,
            fuel: 0,
            cost: 0,
            avgSpeed: 0,
            topSpeed: 0,
        };
    }

    const totalDistance = filtered.reduce((sum, r) => sum + r.distance, 0);
    const totalDuration = filtered.reduce((sum, r) => sum + r.duration, 0);
    const avgSpeed =
        filtered.reduce((sum, r) => sum + r.averageSpeed, 0) / filtered.length;
    const topSpeed = Math.max(...filtered.map(r => r.topSpeed));

    // Example placeholders for fuel & cost
    const fuel = totalDistance * 0.05; // 0.05 liter per unit distance
    const cost = fuel * 100;           // 100 currency/unit fuel

    return {
        distance: totalDistance,
        duration: totalDuration,
        fuel,
        cost,
        avgSpeed,
        topSpeed,
    };
}
