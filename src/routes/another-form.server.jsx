import Layout from "../components/Layout.server"

export default function AnotherForm() {
  return (
    <Layout>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}
