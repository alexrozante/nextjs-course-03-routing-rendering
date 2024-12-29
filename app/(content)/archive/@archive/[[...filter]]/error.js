'use client'

export default function NewsErrorPage({error}) {
  return (
    <div id="error">
      <h2>Error!</h2>
      <p>{error.message}</p>
    </div>
  )
};
