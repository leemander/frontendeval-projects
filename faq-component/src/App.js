import React from "react";
import FAQ from "./FAQ";
export default function () {
  const faqArr = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human.",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day.",
    },
    {
      question: "How long do cats live?",
      answer:
        "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

  const [openFaqs, setOpenFaqs] = React.useState([false, false, false]);

  function selectFaq(clicked) {
    setOpenFaqs((prev) => {
      return prev.map((faq, index) => {
        return index === clicked ? !faq : false;
      });
    });
  }

  const faqEls = faqArr.map((faq, index) => {
    return (
      <FAQ
        key={index}
        q={faq.question}
        a={faq.answer}
        open={openFaqs[index]}
        onclick={() => selectFaq(index)}
      />
    );
  });

  return <section className="faqs">{faqEls}</section>;
}
