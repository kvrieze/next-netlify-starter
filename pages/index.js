import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (

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
 <main>
        <Header title="Welcome to Group Travel Odyssey's New Test Page!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main><body>
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
         <Footer />
</html>
