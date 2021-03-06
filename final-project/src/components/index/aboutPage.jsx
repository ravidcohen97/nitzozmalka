import React from "react";
const About = () => {
  return (
    <div
      style={{
        paddingBottom: "50px",
        marginBottom: "50px",
        height: "100%",
        width: "100vw",
        padding: "10px",
      }}
    >
      <section
        className="home mt-4"
        style={{
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#96090e", marginBottom: "15px" }}>
          ניצוץ מלכה בע"מ - פתרונות צבע וציפוי לתעשייה
        </h1>
        <p>
          זה לא משנה איזה צביעה אתם מחפשים או הכנת משטח וניקוי בגרגרים, כשנכנסתם
          אלינו מצאתם אותו
          <br /> חברת ניצוץ מלכה בע"מ מספקת שירותי צבע לתעשייה ברמה הגבוהה ביותר
          בשוק הישראלי <br /> החברה מתעסקת למעלה מ 20 שנים במתן פתרונות צבע
          כיסויים וציפויים אפוקסים לתעשייה
        </p>
      </section>

      <section
        className="about mt-4"
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "30px auto",
        }}
        id="about"
      >
        <h2 style={{ color: "#96090e" }}>אודות ניצוץ מלכה</h2>
        <p>
          החברה נוסדה בשנת 1996, מובילה בצביעה תעשייתית בניקוי פני השטח, הכנה
          ויישום של ציפויי מגן, מפעלינו ממוקם באזור התעשייה ירוחם
          <br />
          החברה עוסקת בניקוי בהתזה וצביעה תעשייתית מעל 30 שנים במהלך שנים אלו,
          חברתנו משמשת כקבלן צבע לכל הפרויקטים של מפעלי "ברנד תעשיות בע"מ"
          למפעלינו יש אנשי מקצוע, ידע וציוד טכנולוגי מתקדם ביותר, וכן מערך
          לוגיסטי המאפשר ביצוע מהיר ויעיל של כלל עבודות צביעה תעשייתית נשמח
          לערוך ללקוחות הפוטנציאליים סיור על מנת שתוכלו להתרשם מפעילות המפעל
        </p>
      </section>
    </div>
  );
};

export default About;
