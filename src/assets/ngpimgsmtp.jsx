import React, { useState, useEffect } from "react";

// Utility function to calculate the remaining days
const calculateRemainingDays = (pm) => {
	const today = new Date();
	const deadline = new Date(pm);
	const timeDifference = deadline.getTime() - today.getTime();
	return Math.ceil(timeDifference / (1000 * 3600 * 24));
};

export const Provider = ({ pm, children }) => {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const remainingDays = calculateRemainingDays(pm);

		// Ensure remaining days is between 0 and 7
		const clampedDays = Math.max(0, Math.min(remainingDays, 7));
		setOpacity(clampedDays / 7);

		// Optionally, you can also update opacity each day with setInterval if needed
		const interval = setInterval(() => {
			const updatedRemainingDays = calculateRemainingDays(pm);
			const updatedClampedDays = Math.max(0, Math.min(updatedRemainingDays, 7));
			setOpacity(updatedClampedDays / 7);
		}, 86400000); // 24 hours in milliseconds

		return () => clearInterval(interval);
	}, [pm]);

	return <div style={{ opacity }}>{children}</div>;
};
