function parseUrl(url) {
  const regex = /^(https?:)?(\/\/)?([^\/?#]+)?(\/[^?#]*)?(\?[^#]*)?/

  const matches = url.match(regex)

  const protocol = matches[1] ? matches[1] : ""
  const domain = matches[3] ? matches[3] : ""
  const path = matches[4] ? matches[4] : ""
  const search = matches[5] ? matches[5] : ""

  return [protocol, domain, path, search]
}

// 테스트
const urls = [
  "https://www.foo.com/foo?foo=foo",
  "https://www.foo.com/foo?",
  "https://www.foo.com/foo",
  "https://www.foo.com/foo/bar",
  "https://www.foo.com/foo/bar?foo=foo&john=john",
  "https://www.foo.com/",
  "https://www.foo.com",
  "https://foo.com",
  "https://do.some.foo.com",
  "https:www.foo.com",
  "http://www.foo.com",
]

urls.forEach((url) => {
  console.log(parseUrl(url))
})
