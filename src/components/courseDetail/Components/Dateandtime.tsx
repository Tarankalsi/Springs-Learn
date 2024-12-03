import React, { useEffect } from 'react';

// Helper function to calculate days between two dates
const calculateDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end.getTime() - start.getTime();
  return timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
};

interface Batch {
  startDate?: string; // Optional startDate
  endDate?: string; // Optional endDate for batch
  timeZone?: string; // Optional timeZone
  [key: string]: any; // Other properties as needed
}

const Dateandtime: React.FC<{ batch: Batch }> = ({ batch }) => {
  useEffect(() => {
    console.log(batch?.startDate); // Logs whenever batch changes
  }, [batch]);

  if (!batch || !batch.startDate) {
    return <div>Loading...</div>; // Show loading message if batch or startDate is undefined
  }

  // Format the date to "11 Dec 2024"
  const formattedDate = new Date(batch.startDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Render batch duration
  const renderBatchDuration = (batch: Batch) => {
    if (!batch.startDate || !batch.endDate) return null; // If no endDate, return null

    const batchDuration = calculateDaysBetween(batch.startDate, batch.endDate);
    return <span>{batchDuration + 1} days</span>;
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <div>
          <p className="text-md sm:text-2xl font-semibold">
            {formattedDate} ({renderBatchDuration(batch)}) {/* Display formatted date and batch duration */}
          </p>
        </div>
        <div>
          <p className="text-xs sm:text-lg">{batch.timeZone}</p> {/* Display time zone */}
        </div>
      </div>
    </div>
  );
};

export default Dateandtime;
