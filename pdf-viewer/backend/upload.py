import subprocess

output_filename = 'output.png'
output_format = 'png256'
resolution = 500
input_filename = 'test.pdf'
downscale_factor = 1

output_formats = [
    'pnggray',
    'png16',
    'png256',
    'png16m',
    'jpeg'
]
downscale_factors = [
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    20
]
image_resolutions = [
    300,
    500,
    700,
    1000
]

# Best Option:
#  png 16m 7

for output_format in output_formats:
    for downscale_factor in downscale_factors:
        output_filename = 'output-{}-{}.{}'.format(
            output_format,
            downscale_factor,
            'png' if output_format.startswith('png') else 'jpg'
        )
        subprocess.call([
            'gs',
            '-sDEVICE={}'.format(output_format),
            '-dDownScaleFactor={}'.format(downscale_factor),
            '-dDOINTERPOLATE',
            '-dLastPage=1',
            '-o {}'.format(output_filename),
            '-r{}x'.format(resolution),
            input_filename
        ])
