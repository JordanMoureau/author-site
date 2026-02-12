export default function AboutJordan() {
  const favorites = [
    {
      type: "color",
      answer: "Light green, obviously",
    },
    {
      type: "author",
      answer: "Diana Wynne Jones",
    },
    {
      type: "drink",
      answer: "A nice cup of Earl Grey tea, not a mean one.",
    },
    {
      type: "hair style",
      answer: "Korean wolfcut, the very definition of unkempt",
    },
    {
      type: "foods",
      answer: "Sushi, burgers, donuts & fancy cakes of any kind",
    },
  ];
  return (
    <div className="card">
      <h2>About the author</h2>
      <p>
        Jordan had a penchant for story-telling from a young age. She was,
        unfortunately, a tall-tale-teller. As she grew up though, she learned to
        channel her love into something more productive (*cough and erm, more
        honest) by writing books. She spend her childhood wandering the woods of
        Northern Georgia, sometimes dreaming up epic stories and sometimes
        pretending to be part of them. It was always her dream to be a
        dreamer--a professional one, that is--and spend her days thinking
        intently. Her favorite past-time.
      </p>

      <h2>Family life</h2>
      <p>
        Jordan is the mother of three children, for whom all of her books are
        thus far dedicated. Jack, Danny, and Gemma, are her silly little beans.
        The four of them cna be found eating poke, wandering the stacks of
        libraries, stomping through the woods and fields, or cuddlign up on teh
        couch to watch whatever tv show they are obsessed with.
      </p>
      <div className="about-list">
        {favorites.map((item, index) => (
          <div className="list" key={index}>
            <h4>favorite {item.type}</h4>
            <p>{item.answer}</p>
          </div>
        ))}{" "}
      </div>

      <h2>Hobbies & Pastimes</h2>
      <p>
        When not writing, Jordan regularly haunts weightlifting rooms in gyms,
        horseback rides, draws in charcoal and on the computer, hikes, swims and
        computer codes websites--it's very fun you should try it.
      </p>
    </div>
  );
}
