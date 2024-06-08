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

		// Ensure remaining days is between 0 and 3
		const clampedDays = Math.max(0, Math.min(remainingDays, 3));
		setOpacity(clampedDays / 3);

		// Update opacity each day
		const interval = setInterval(() => {
			const updatedRemainingDays = calculateRemainingDays(pm);
			const updatedClampedDays = Math.max(0, Math.min(updatedRemainingDays, 3));
			setOpacity(updatedClampedDays / 3);
		}, 86400000); // 24 hours in milliseconds

		return () => clearInterval(interval);
	}, [pm]);

	return <div style={{ opacity }}>{children}</div>;
};
