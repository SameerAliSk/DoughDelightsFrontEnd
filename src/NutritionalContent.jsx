function NutritionalContent() {
  return (
    <div className="mb-4 mt-4 flex flex-col items-center font-sans">
      <h1 style={{ fontWeight: "700", fontSize: "36px", color: "#ef4444" }}>
        PIZZA NUTRITION
      </h1>
      {Array.from({ length: 47 }, (_, i) => i + 1).map((each) => (
        <img
          src={`https://tnc.dominos.co.in/images/MNI-${
            each <= 9 ? `0` : ""
          }${each}.jpg`}
          alt={`image-${each}`}
          key={each}
        />
      ))}
    </div>
  );
}

export default NutritionalContent;
