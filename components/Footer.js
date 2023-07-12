import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="https://grouptravelodyssey.quickbase.com/up/bq2zenuiz/a/r2/e19/v0" alt="GTO Logo" className={styles.logo} />
      </footer>
    </>
  )
}
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    .pane {
      width: 50%;
      height: 50%;
      float: left;
      box-sizing: border-box;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <div class="pane" id="pane1">
    <!-- Content for pane 1 -->
  </div>
  <div class="pane" id="pane2">
    <!-- Content for pane 2 -->
  </div>
  <div class="pane" id="pane3">
    <!-- Content for pane 3 -->
  </div>
  <div class="pane" id="pane4">
    <!-- Content for pane 4 -->
  </div>
</body>
</html>
