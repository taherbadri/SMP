import React, { useState, useEffect } from "react";

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

		const clampedDays = Math.max(0, Math.min(remainingDays, 7));
		setOpacity(clampedDays / 7);

		const interval = setInterval(() => {
			const updatedRemainingDays = calculateRemainingDays(pm);
			const updatedClampedDays = Math.max(0, Math.min(updatedRemainingDays, 7));
			setOpacity(updatedClampedDays / 7);
		}, 86400000);

		return () => clearInterval(interval);
	}, [pm]);

	return <div style={{ opacity }}>{children}</div>;
};
