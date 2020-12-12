import Head from 'next/head'
import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'

export default function Index() {
  return (
    <Layout className="bg-gray-50 text-green-500">
      <Row>
        <Container>
          Header
        </Container>
      </Row>
      <Main>
        <div className="px-4 py-6 sm:px-0 bg-blue-200">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </Main>
      <Row className="border-t border-gray-300 bg-gray-200 text-gray-600">
        <Container>
          Footer
        </Container>
      </Row>
    </Layout>
  )
}
