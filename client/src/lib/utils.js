export function formatMessageTime(date) {
   return new Date(date).toLocaleTimeString("en-Us", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
   })
}

export function createGoogleCalendarUrl(event) {
   const { title, description, location, startTime, endTime } = event;

   const formatDate = (dateStr) => {
      if (!dateStr) return '';
      return new Date(dateStr).toISOString().replace(/-|:|\.\d\d\d/g, "");
   };

   const start = formatDate(startTime);
   const end = formatDate(endTime) || start; // Default to same time if no end time

   const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title || "New Event",
      details: description || "",
      location: location || "",
      dates: `${start}/${end}`,
   });

   return `https://calendar.google.com/calendar/render?${params.toString()}`;
}