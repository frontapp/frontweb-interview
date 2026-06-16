const BackgroundPattern = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="310" height="465" viewBox="0 0 310 465" fill="none">
      <circle cx="310.09" cy="310.09" r="154.91" fill="#A857F1" />
      <path d="M0.00012207 155.18C0.00012207 69.4763 69.4764 0 155.18 0V155.18H0.00012207Z" fill="#A857F1" />
      <path d="M155.18 465C69.4764 465 0.00012207 395.644 0.00012207 310.09C0.00012207 224.535 69.4764 155.18 155.18 155.18V465Z" fill="#A857F1" />
      <path d="M155.18 155.18C155.18 69.4764 224.535 0.000119203 310.09 0.000120223C395.644 0.000121243 465 69.4764 465 155.18L155.18 155.18Z" fill="#A857F1" />
    </svg>
  )
}

export default BackgroundPattern;
