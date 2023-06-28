export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
  /* Compare two promises */
    .race([chinaDownload, USDownload])
  /* show the download result */
    .then((res) => res);
}
