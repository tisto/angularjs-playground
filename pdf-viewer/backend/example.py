import subprocess

output_filename = 'output.png'
output_format = 'png256'
resolution = 500
input_filename = 'test.pdf'
downscale_factor = 1
output_format = 'png16m'
downscale_factor = 3
image_resolution = 700

# Best Option:
#  png 16m 7

subprocess.call([
    'gs',
    '-sDEVICE={}'.format(output_format),
    '-dDownScaleFactor={}'.format(downscale_factor),
    '-dDOINTERPOLATE',
    '-o{}'.format('output-%d.png'),
    '-r{}x'.format(resolution),
    input_filename
])
