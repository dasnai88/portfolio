import { portfolio } from "@/data/portfolio";

export function PortfolioSocialImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "54px",
        color: "#f6efe7",
        background:
          "radial-gradient(circle at top left, rgba(242, 157, 118, 0.28), transparent 32%), radial-gradient(circle at right center, rgba(141, 162, 255, 0.22), transparent 24%), linear-gradient(180deg, #10141d 0%, #161b26 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            border: "1px solid rgba(246, 239, 231, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f29d76",
            fontSize: "26px",
            fontWeight: 700,
          }}
        >
          I
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            {portfolio.name}
          </span>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(246, 239, 231, 0.72)",
            }}
          >
            {portfolio.role}
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "860px",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(246, 239, 231, 0.14)",
            background: "rgba(255,255,255,0.04)",
            fontSize: "14px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {portfolio.badge}
        </span>

        <h1
          style={{
            margin: 0,
            fontSize: "68px",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            fontWeight: 700,
          }}
        >
          {portfolio.headline}
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "24px",
            lineHeight: 1.45,
            color: "rgba(246, 239, 231, 0.8)",
          }}
        >
          {portfolio.intro}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {portfolio.trustPoints.map((point) => (
          <div
            key={point}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(246, 239, 231, 0.14)",
              background: "rgba(255,255,255,0.06)",
              fontSize: "16px",
              color: "rgba(246, 239, 231, 0.88)",
            }}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
