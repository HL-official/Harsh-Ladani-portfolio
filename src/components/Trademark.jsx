const Trademark = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-16 border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
      <p className="tracking-tight">
        © {currentYear} Harsh Ladani. All rights reserved.
        <span className="mx-2">•</span>
        Made for getting a better job.
      </p>
    </div>
  );
};

export default Trademark;
