// const footer = fetch('/components/footer.html')
//   .then((data) => data.text())
//   .then((html) => (document.getElementById('footer').innerHTML = html))

const getHeader = async function () {
  return await fetch('/components/header.html').then((data) => data.text())
}

const getFooter = async function () {
  return await fetch('/components/footer.html').then((data) => data.text())
}

const getCurrentPagePath = () => {
  return window.location.pathname
}

const getPageByPath = async (path) => {
  return await fetch(path).then((data) => data.text())
}

const initPage = async () => {
  /** Insert footer and header */
  document.getElementById('header').innerHTML = await getHeader()
  document.getElementById('footer').innerHTML = await getFooter()
}

initPage()
