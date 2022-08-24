import path from 'path'
import fs from 'fs/promises'

function HomePage(props) {

  const { products } = props

  return (
    <div>
      <h1>This Is The Home Page!</h1>
      <ul>
        {products?.map(p => (<li key={p.id}>{p.title}</li>))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {

  const filePath = path.join(process.cwd(), 'data', 'db.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

export default HomePage