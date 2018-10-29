<?xml version = "1.0" encoding = "iso-8859-1" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">


<html>
<div class ="contenedor">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
  <title>XML/XSLT</title>
  <link rel="StyleSheet" type="text/css" href="xsl_estilos.css" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
</head>

<body>
<br/>
<br/>
<h1>Codigos</h1>
<br/>
<br/>
<table>
<tbody>
<tr>
<th>Nombres</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
<th>11</th>
<th>12</th>
<th>13</th>
<th>14</th>
<th>15</th>
</tr>
        
        <xsl:for-each select="lista_de_codigos/codigo">
        <tr>
                <th><xsl:value-of select="nombre"/></th>
                <td><xsl:value-of select="n0"/></td>
                <td><xsl:value-of select="n1"/></td>
                <td><xsl:value-of select="n2"/></td>
                <td><xsl:value-of select="n3"/></td>
                <td><xsl:value-of select="n4"/></td>
                <td><xsl:value-of select="n5"/></td>
                <td><xsl:value-of select="n6"/></td>
                <td><xsl:value-of select="n7"/></td>
                <td><xsl:value-of select="n8"/></td>
                <td><xsl:value-of select="n9"/></td>
                <td><xsl:value-of select="n10"/></td>
                <td><xsl:value-of select="n11"/></td>
                <td><xsl:value-of select="n12"/></td>
                <td><xsl:value-of select="n13"/></td>
                <td><xsl:value-of select="n14"/></td>
                <td><xsl:value-of select="n15"/></td>
        </tr>
        </xsl:for-each>
        

</tbody>
</table>
  
<p></p>
<p>
    <a href="http://validator.w3.org/check?uri=referer"><img
      src="http://www.w3.org/Icons/valid-xml10" alt="Valid XML 1.0" height="31" width="88" /></a>
    &#160;
    <a href="http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Finspt.diegocorsi.com.ar%2Fcss%2Festilos.css"><img
      src="http://jigsaw.w3.org/css-validator/images/vcss" alt="CSS V&#225;lido!" height="31" width="88" /></a>
  </p>
</body>
</div>
</html>

</xsl:template>
</xsl:stylesheet>
